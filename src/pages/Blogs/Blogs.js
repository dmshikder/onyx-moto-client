import React from "react";


const Blogs = () => {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 ">
      <div className="card m-4 shadow-xl p-8 bg-slate-200 mt-20">
        <h5 className="font-bold">1. How will you improve the performance of a React Application?</h5>
        <p>
          <span className="text-red-500 font-bold">Answer:</span> <br /> React.js is known as
          one of the fastest web development frameworks out there. A lot of
          methods, used to optimize the performance of React, have been
          substituted by simpler techniques and commands. Here are some steps to
          improve the performance of a React Application: <br /> • Dependency
          optimization <br /> • Avoid Inline Function Definition in the Render
          Function <br /> • Throttling and Debouncing Event Action in JavaScript <br /> •
          Avoid using Index as Key for map <br /> • Avoiding Props in Initial States
        </p>
      </div>
      <div className="card m-4 shadow-xl p-8 bg-slate-200">
        <h5 className="font-bold">
          2. What are the different ways to manage a state in a React
          application?
        </h5>
        <p>
          <span className="text-red-500 font-bold">Answer:</span> <br />   Managing state in React apps
          isn't as simple as using useState or useReducer. The four kinds of
          React state to manage are: <br /> • Local state - Local state is data we
          manage in one or another component. <br /> • Global state - Global state is
          data we manage across multiple components. <br /> • Server state - Data that
          comes from an external server that must be integrated with our UI
          state. <br /> • URL state - Data that exists on our URLs, including the
          pathname and query parameters.
        </p>
      </div>
      <div className="card m-4 shadow-xl p-8 bg-slate-200">
        <h5 className="font-bold">3. How does prototypical inheritance work?</h5>
        <p>
          <span className="text-red-500 font-bold">Answer:</span> <br /> The prototypical
          inheritance is a feature in javascript used to add methods and
          properties in objects. When it comes to inheritance, JavaScript only
          has one construct: objects. Each object has a private property which
          holds a link to another object called its prototype. That prototype
          object has a prototype of its own, and so on until an object is
          reached with null as its prototype.
        </p>
      </div>
      <div className="card m-4 shadow-xl p-8 bg-slate-200">
        <h5 className="font-bold">
          4. Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts
        </h5>
        <p>
          <span className="text-red-500 font-bold">Answer:</span> <br /> One should never update
          the state directly because of the following reasons: • If we update it
          directly, calling the setState() afterward may just replace the update
          we made. • When we directly update the state, it does not change
          this.state immediately. Instead, it creates a pending state
          transition, and accessing it after calling this method will only
          return the present value. • We will lose control of the state across
          all components.
        </p>
      </div>
      <div className="card m-4 shadow-xl p-8 bg-slate-200">
        <h5 className="font-bold">5. What is a unit test? Why should write unit tests?</h5>
        <p>
          <span className="text-red-500 font-bold">Answer:</span> <br /> Unit testing is a
          software development process in which the smallest testable parts of
          an application, called units, are individually and independently
          scrutinized for proper operation. Unit testing allows software
          developers to actually think through the design of the software and
          what has to be done before they write the code. We should write unit
          test because it: • Reduces code complexity • Improves code coverage •
          Helps gauge performance • Provides documentation • Saves time and
          money
        </p>
      </div>
    </div>
  );
};

export default Blogs;
