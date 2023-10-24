import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import http from "../../lib/http";
import "./Transaction.css";
import logo from "../../assets/logo.svg";

const Transaction = () => {
  let {id}=useParams();
  const [refnum,setRefnum]=useState("Loading refnum...");
  const [biller,setBiller]=useState("Loading biller...");
  const [category,setCateg]=useState("Loading category...");
  const [billee,setBillee]=useState("Loading billee...");
  const [description,setDesc]=useState("Loading description...");
  const [amount,setAmount]=useState("0.00");
  const [status,setStatus]=useState("Loading status...");
  const [payment,setPayment]=useState("Loading payment method...");
  const [date,setDate]=useState("1990, Month 00, 12:00am");
  const [transactor,setTransactor]=useState("Loading transactor...");
  const api=http({Authorization: "Bearer "+localStorage.getItem("token")});

  useEffect(()=>{
    async function fetchData()
    {
        try
        {
            const response=await api.get("/transaction/"+id)
            setRefnum(response.data.bill.refnum);
            setBiller(response.data.bill.biller);
            setCateg(response.data.bill.category);
            setBillee(response.data.bill.billed_to);
            setDesc(response.data.bill.description);
            setAmount(response.data.bill.amount);
            setStatus(response.data.bill.status+"; "+response.data.status);
            setPayment(response.data.payment_method);
            setDate(response.data.date);
            setTransactor(response.data.payor.first_name+" "+response.data.payor.last_name);
        }
        catch(error)
        {
            console.error("Error fetching data:", error);
        }
    }
    fetchData();
  },[]);

  return (
    <>
        <div className="receipt">
            <div className="logo">
                <object data={logo}></object>
            </div>
            <div className="details">
                <div><b>Reference no: </b>{refnum}</div>
                <div><b>Biller: </b>{biller}</div>
                <div><b>Category: </b>{category}</div>
                <div><b>Billed to: </b>{billee}</div>
                <div><b>Description: </b>{description}</div>
                <div><b>Amount: </b>&#8369;&nbsp;{amount}</div>
                <div><b>Status: </b>{status}</div>
                <div><b>Payment method: </b>{payment}</div>
                <div><b>Transaction date: </b>{date}</div>
                <div><b>Transacted by: </b>{transactor}</div>
            </div>
        </div>
    </>
  )
}

export default Transaction