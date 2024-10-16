import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Classroom } from "../../components/Classroom";

export const StudentPage = () => {
  const credentials =
    localStorage.getItem("credentials") &&
    JSON.parse(localStorage.getItem("credentials"));

  const classRooms = [1, 2, 3, 4, 5, 6];
  const navigate = useNavigate();
  const [user] = useState(
    localStorage.getItem("credentials") ? credentials?.user : []
  );

  const getUser = async () => {
    setTimeout(() => {}, 1000);
    const validateToken = await fetch(
      `http://localhost:7000/api/auth/verify/${credentials?.token}`
    ).then((res) => res.json());

    await validateToken;
    if (!validateToken?.tokenData) navigate("/login");
  };

  const career = (career) => {
    if (career?.length > 1) return "bg-purple-950";
    if (career) {
      switch (career[0]) {
        case "DS":
          return "bg-green-700";
        case "AF":
          return "bg-red-700";
        case "IT":
          return "bg-blue-700";
        default:
          return "bg-purple-950";
      }
    }
  };

  const destroySession = () => {
    if (localStorage.getItem("credentials")) {
      localStorage.removeItem("credentials");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={`min-h-screen ${career(user?.career)}  text-white`}>
      <Navbar
        email={user?.email}
        destroySession={destroySession}
        role={user?.role}
      />
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-20">
          {classRooms.map((classRoom) => (
            <Classroom key={classRoom} classRoom={classRoom} />
          ))}
        </div>
      </main>
    </div>
  );
};
