import { useState, useEffect } from "react";

export default function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("[ini data]", data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "25% 25% 25%  25% ",
        justifyContent: "space-around",
        marginTop: "1.5em",
        Width: "100%",
      }}
    >
      {data.slice(0.1).map((value) => (
        <div style={{}}>
          <div
            style={{
              margin: "10px",
              fontFamily: "poppins",
            }}
          >
            <div
              style={{
                padding: "10px",
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                backgroundColor: "#f5f5f5f2",
                borderRadius: "15px",
                height: "50%",
              }}
              className="group relative shadow"
              onClick={() => alert("Namanya Adalah : " + value.name)}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  marginTop: "1.5em",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
                className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
              >
                Kartu Nama <p>{value.name}</p>
              </div>
              <div
                style={{ padding: "10px" }}
                className="mt-4 flex justify-between"
              >
                <div>
                  <h3>
                    <span aria-hidden="true" className="absolute inset-0" />
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Username : {value.username}{" "}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  Email : {value.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
