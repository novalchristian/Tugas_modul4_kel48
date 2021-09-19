/* eslint-disable react-hooks/rules-of-hooks */
import { React, useState, useEffect } from "react";
import "./input.css";

export default function index() {
  const contoh = useState(false);
  console.log("[state]", contoh);
  const [show, setShow] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const submit = () => {
    let a =
      password === password1
        ? "Username " + user + " Berhasil dibuat"
        : "Password Tidak Valid";
    alert(a);
  };

  useEffect(() => {
    console.log('Anda memasukkan Inputan')
  })

  return (
    <div
      style={{
        textAlign: "center",
        height: "87vh",
        overflow: "hidden",
        width: "99.85%",
      }}
      className="container"
    >
      {show && (
        <form
          style={{
            position: "relative",
            top: "11em",
            boxSizing: "border-box",
            width: "40%",
            left: "30vw",
            backgroundColor: "#2980b9",
            borderRadius: "20px",
            padding: "20px",
          }}
          onSubmit={submit}
        >
          <div className="">
            <p
              style={{
                textAlign: "center",
                position: "relative",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              input with useState
            </p>
          </div>
          <div className="inputWrapper">
            <div>
              <input
                style={{
                  padding: "7px",
                  marginBottom: 10,
                  outline: "none",
                  borderRadius: "8px",
                  fontFamily: "poppins",
                  fontSize: "15px",
                }}
                className="form"
                placeholder="name"
                size="50"
                value={user}
                onChange={(event) => setUser(event.target.value)}
              />
            </div>
            <div>
              <input
                style={{
                  padding: "7px",
                  marginBottom: 10,
                  outline: "none",
                  borderRadius: "8px",
                  fontFamily: "poppins",
                  fontSize: "15px",
                }}
                required
                placeholder="password"
                size="50"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div>
              <input
                style={{
                  padding: "7px",
                  marginBottom: 10,
                  outline: "none",
                  borderRadius: "8px",
                  fontFamily: "poppins",
                  fontSize: "15px",
                }}
                required
                placeholder="password"
                size="50"
                value={password1}
                onChange={(event) => setPassword1(event.target.value)}
              />
            </div>
            <div>
              <input
                style={{backgroundColor:"green", padding:10, color:"white", borderRadius:10}}
                type="submit"
                placeholder="password"
                size="50"
                value="Submit"
                onChange={(event) => setPassword1(event.target.value)}
              />
            </div>
          </div>
        </form>
      )}
      <button className="Button" onClick={() => setShow(!show)}>
        {show ? "hide" : "show"}
      </button>
    </div>
  );
}
