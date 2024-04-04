import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";
React;

interface IUser {
  name: string;
  address: IAddress;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: ICompany;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface IAddress {
  city: string;
  street: string;
  suite: string;
  geo: IGeo;
  zipcode: string;
}

interface IGeo {
  lat: string;
  lng: string;
}
export default function Users() {
  const [users, setUsers] = useState<IUser[]>([]);
  //   const [count, setCount] = useState(0);
  //   console.log("from users");

  //   const handleScroll = (e: any) => {
  //     console.log("scrolled");
  //     // console.log(e.currentTarget.innerHeight)
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);

  //     return window.removeEventListener("scroll", handleScroll);
  //   }, []);
// ['john', 'james', 'micheal']


  useEffect(() => {
    async function getUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = res.json();
      data.then((data) => setUsers(data));
      // const user = data.then(data => setUsers(data))
      // console.log(data.then(data => console.log(data)
      // ), 'data');
      // return data
    }
    getUsers().then(
      () => {
        console.log();
      },
      () => {
        console.log();
      }
    );
    // setUsers([]);
  }, []);
  console.log(users, "users");

  const styles = css({
    "&": {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 2fr))",
      backgroundColor: "#fefefe",
      margin: "30px",
    },
    "& .card": {
      border: "1px solid #ededed ",
      borderRadius: "10px",
      margin: "20px",
      padding: "10px",
      backgroundColor: "white",
    },
    "& .card:hover": {
      boxShadow: " 0px 0px 30px #aaaaaa",
    },
    "& .card .name": {
      padding: "20px",
    },
    "& .card .name h3": {
      textAlign: "center",
    },
    "& .card .name h3 div": {},
    "& .card .address": {
      textAlign: "center",
      padding: "2px",
      backgroundColor: "#ededed",
    },
    "& .card .geo": {
      padding: "10px",
    },
    "& .card .contact": {
      textAlign: "center",
      padding: "3px",
    },
    "& .card .company": {
      border: "1px solid #adadad",
      padding: " 5px",
      borderRadius: "5px",
    },
    "& .card .company:hover":{
      boxShadow: " 0px 0px 10px #aaaaaa"
    }
  });

  return (
    <div className={`container ${styles}`}>
      {users.map((item, id) => (
        <div key={id} className="card">
          <div className="name">
            <h3>INFO</h3>
            <div>
              <p>Name : {item.name}</p>
              <p>Username : {item.username}</p>
              <p>email : {item.email}</p>
            </div>
          </div>

          <div className="address">
            <h3>ADDRESS</h3>
            <h5>
              {item.address.street} off {item.address.suite},{" "}
              {item.address.city}
            </h5>
            <p>Zipcode : {item.address.zipcode}</p>
          </div>

          <div className="geo">
            <h4>Coordinate</h4>
            <div>
              <p>
                lat : {item.address.geo.lat}
                <span> </span> lng : {item.address.geo.lng}
              </p>
            </div>
          </div>

          <div className="contact">
            <h3>CONTACT</h3>
            <div>
              <p>Phone : {item.phone}</p>
              <p>Website: {item.website}</p>
            </div>
          </div>

          <div className="company">
            <h4>{item.company.name} Company</h4>
            <p>{item.company.catchPhrase}</p>
            <p>{item.company.bs}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
