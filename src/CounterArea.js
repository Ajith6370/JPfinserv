import React from "react"
import { FaGlobe, FaUsers, FaBriefcase, FaSearchDollar } from "react-icons/fa"
import "../src/styles/css/CounterArea.css"

const CounterArea = () => {
  // Array of counter data
  const counters = [
    { icon: <FaGlobe />, count: 15, label: "Years Of Experience" },
    { icon: <FaUsers />, count: 900, label: "Happy Clients" },
    {
      icon: <FaBriefcase />,
      count: 120,
      label: "Complete Projects",
      extra: "+",
    },
    { icon: <FaSearchDollar />, count: 150, label: "Revenue", extra: "K+" },
  ]

  return (
    <div className="counter-area">
      <div className="container">
        <div className="row">
          {counters.map(({ icon, count, label, extra }, index) => (
            <div className="col-lg-3 col-sm-6" key={index}>
              <div
                className="single-counter text-center mt-30 mb-30 wow fadeInUp animated"
                data-animation="fadeInDown animated"
                data-delay=".2s"
              >
                <div className="counter p-relative">
                  <span className="icon">{icon}</span>
                  <span className="count">
                    {count}
                    {extra && <small>{extra}</small>}
                  </span>
                </div>
                <p>{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CounterArea
