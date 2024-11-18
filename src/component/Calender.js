// src/components/Calendar.js
import React, { useState, useEffect } from "react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);

  useEffect(() => {
    generateCalendar();
  }, [currentDate]);

  // Function to get the number of days in the current month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to generate the days of the month and manage blank days for the start
  const generateCalendar = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = getDaysInMonth(month, year);
    const daysArray = [];

    // Add blank days at the start of the month
    for (let i = 0; i < firstDay; i++) {
      daysArray.push("");
    }

    // Add actual days
    for (let i = 1; i <= totalDays; i++) {
      daysArray.push(i);
    }

    setDaysInMonth(daysArray);
  };

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
    setCurrentDate(newDate);
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="header-left">
          <button>Months</button>
          <button>Weeks</button>
          <button>Days</button>
        </div>
        <div className="header-center">
          <h2>
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </h2>
        </div>
        <div className="header-right">
          <button onClick={handlePrevMonth}>←</button>
          <button className="day-btn" onClick={handleToday}>
            Today
          </button>
          <button onClick={handleNextMonth}>→</button>
        </div>
      </div>

      <div className="calendar-days">
        {daysOfWeek.map((day) => (
          <div key={day} className="calendar-day-name">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-dates">
        {daysInMonth.map((day, index) => (
          <div
            key={index}
            className={`calendar-date ${
              day === currentDate.getDate() ? "current-day" : ""
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
