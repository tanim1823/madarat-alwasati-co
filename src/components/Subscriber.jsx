import { useState } from "react";

const Subscriber = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <>
      <div className="subscribe-section mb-4">
        <h2>Subscribe Now!!</h2>
        <div className="text">
          Subscribe now for get all the update and promotion from our company
        </div>
        {/* <!--Subscribe Form--> */}
        <div className="subscribe-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={input}
                placeholder="Enter your email"
                required
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" className="theme-btn">
                <span className="icon fa fa-angle-right"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Subscriber;
