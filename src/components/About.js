import React from 'react';

const About = () => {
  return (
    <section id="about-5" className="wide-100 about-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 order-last order-md-2">
            <div className="txt-table left-column wow fadeInRight">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Mon – Wed</td>
                    <td>-</td>
                    <td className="text-end">10:00 AM - 9:00 PM</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td>-</td>
                    <td className="text-end">10:00 AM - 7:30 PM</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>-</td>
                    <td className="text-end">10:00 AM - 9:00 PM</td>
                  </tr>
                  <tr className="last-tr">
                    <td>Sun - Sun</td>
                    <td>-</td>
                    <td className="text-end">10:00 AM - 5:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-6 order-first order-md-2">
            <div className="txt-block right-column wow fadeInLeft">
              <span className="section-id">Time Schedule</span>
              <h3 className="h3-xs">Working Hours</h3>
              <p className="p-lg">
                Gravida porta vitae auctor congue magna impedit ligula and risus mauris donec ligula magnis aliqum mullam and primis risus undo donec luctus neque feugiat suscipit risus auctor egestas an augue mauri ligula magnis aliqum sapien vitae nemo egestas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
