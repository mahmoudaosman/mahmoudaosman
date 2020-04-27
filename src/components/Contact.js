import React, { Component } from "react";
import "./Contact.css";

export class Contact extends Component {
  render() {
    return (
      <section className="contact_form">
        <div className="container">
          <div class="form-item">
            <h1 className="text-uppercase">Contact me</h1> <hr />
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <form method="POST" action="#">
                  <div className="form-group">
                    <label for="fname">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="form-group">
                    <label for="last name">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your last name"
                    />
                  </div>

                  <div className="form-group">
                    <label for="email">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="form-group">
                    <label for="message">Message</label>
                    <textarea
                      className="form-control"
                      placeholder="Your message..."
                      cols="15"
                      rows="10"
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary text-uppercase">
                    submit
                  </button>
                </form>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
