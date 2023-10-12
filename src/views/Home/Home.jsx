const Home = () => {
  return (
    <>
      <div className="md:padding md:h-screen mb-[10rem]">
        <div className="mt-1 pt-10 md:hero md:min-h-screen md:bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            {/* <img
              src="/images/stock/photo-1635805737707-575885ab0820.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            /> */}
            <div>
              <h1 className="text-5xl font-bold">Bayarin PH</h1>
              <p className="py-6">
                Welcome to Bayarin PH, your trusted partner in simplifying bill
                payments. We're dedicated to making your life easier by
                providing a convenient online platform for settling bills. With
                Bayarin, managing your finances has never been more
                straightforward. Join us on a journey of hassle-free bill
                payments today!
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="padding h-screen">Services</div>
    </>
  );
};

export default Home;
