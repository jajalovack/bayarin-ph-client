import { useState, useEffect } from "react";
import http from "../../lib/http";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    padding: "0",
  },
};

const Misc = () => {
  const api = http({
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  });

  const [billers, setBillers] = useState([]);
  const [selectedBiller, setSelectedBiller] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refNumValue, setRefNumValue] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [paymentMethods, setPaymentMethods] = useState([]);

  useEffect(() => {
    getBillers();
    getPaymentMethods();
  }, []);

  async function getBillers() {
    try {
      const response = await api.get("/billers");
      const sortedBillers = response.data.sort((a, b) =>
        a.biller.localeCompare(b.biller)
      );
      setBillers(sortedBillers);
    } catch (e) {
      console.log(e);
    }
  }

  async function getPaymentMethods() {
    try {
      const response = await api.get("/paymentmethods");
      setPaymentMethods(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  const openModal = (biller) => {
    setSelectedBiller(biller);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBiller(null);
    setIsModalOpen(false);
  };

  const refNumInput = (event) => {
    const sanitizedValue = event.target.value.replace(/\D/g, "").slice(0, 13);
    setRefNumValue(sanitizedValue);
  };
  return (
    <>
      <div className="w-full">
        <h1 className="bg-[#297bfa] w-full px-8 flex py-[6rem] md:py-[10rem] text-4xl font-bold text-[#E0DA00]">
          Electric Utilities
        </h1>
        <div className="my-4 h-screen">
          <div className="h-96">
            <table className="table table-pin-rows">
              <tbody>
                {billers.map((biller, index) => (
                  <tr key={index}>
                    <td
                      className="text-xl cursor-pointer"
                      onClick={() => openModal(biller)}
                    >
                      {biller.biller}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Biller Modal"
        style={customStyles}
      >
        {selectedBiller && (
          <>
            {/* header */}
            <div className="font-semibold text-xl bg-blue-600 w-full flex justify-between px-5 py-5">
              Miscellaneous
              <div>
                <button
                  onClick={closeModal}
                  className="text-black cursor-pointer"
                >
                  <AiOutlineClose />
                </button>
              </div>
            </div>
            {/* end of header */}

            {/* name of biller */}
            <div className="flex justify-between">
              <h3 className="text-2xl font-bold w-full mt-5 ml-5">
                {selectedBiller.biller}
              </h3>
            </div>

            {/* divider */}
            <div className="flex flex-col w-full border-opacity-50"></div>
            <div className="grid h-1 card bg-base-300 rounded-box place-items-center my-5"></div>
            {/* end of divider */}

            {/* start of input */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
              <div className="sm:mx-auto">
                <div className="pb-3 sm:mx-auto md:text-4xl font-semibold md:font-bold border-b-4 border-black md:px-10 sm:flex md:w-full overflow-hidden">
                  <p className="mr-5">Reference Number:</p>
                  <input
                    className="w-[20rem] outline-none overflow-y-hidden border-black font-normal"
                    placeholder="reference number..."
                    type="text"
                    inputMode="numeric"
                    value={refNumValue}
                    onInput={refNumInput}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center mt-5">
                <select
                  className="select w-full max-w-xs select-bordered"
                  value={selectedPaymentMethod}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                >
                  <option disabled value="">
                    Pick your payment method
                  </option>
                  {paymentMethods.map((method) => (
                    <option key={method.id} value={method.payment_method}>
                      {method.payment_method}
                    </option>
                  ))}
                </select>
                <button className="btn absolute bottom-0 mb-5 bg-blue-600">
                  Confirm
                </button>
              </div>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default Misc;
