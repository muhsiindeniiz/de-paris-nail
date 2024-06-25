import React, { useEffect, useState } from "react";
import Sidebar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";
import { useForm, useFieldArray } from "react-hook-form";
import { auth } from "../config";

const Pricess = () => {
  const navigate = useNavigate();
  const { control, register, handleSubmit, setValue } = useForm({
    defaultValues: {
      prices: [
        {
          description: "",
          name: "",
          price: "",
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "prices",
  });

  const [alert, setAlert] = useState({ message: "", type: "" });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user?.uid) navigate("/");
    });

    const db = getDatabase();
    const pricesRef = ref(db, "0/prices");

    get(pricesRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const pricesData = snapshot.val();
          setValue("prices", pricesData);
          console.log(pricesData);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [navigate, setValue]);

  const onSubmit = (data) => {
    const db = getDatabase();
    const pricesRef = ref(db, "0/prices");
    set(pricesRef, data.prices)
      .then(() => {
        setAlert({ message: "Prices updated successfully!", type: "success" });
      })
      .catch((error) => {
        console.error(error);
        setAlert({ message: "Error updating prices.", type: "danger" });
      });
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid" style={{ flex: 1, marginBottom: 20 }}>
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="col-lg-8">
            <h1 className="text-center mb-4">Edit Prices</h1>
            {alert.message && (
              <div
                className={`alert alert-${alert.type} alert-dismissible fade show`}
                role="alert"
              >
                {alert.message}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              {fields.map((item, index) => (
                <div key={item.id} className="mb-3">
                  <label className="form-label">Description:</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register(`prices.${index}.description`)}
                  />
                  <label className="form-label">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register(`prices.${index}.name`)}
                  />
                  <label className="form-label">Price:</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register(`prices.${index}.price`)}
                  />
                  <button
                    type="button"
                    className="btn mt-2"
                    style={{
                      background: "red",
                    }}
                    onClick={() => remove(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="btn mb-3"
                style={{
                  background: "green"
                }}
                onClick={() =>
                  append({
                    description: "",
                    name: "",
                    price: "",
                  })
                }
              >
                Add New Price
              </button>
              <button
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: "orange",
                }}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricess;
