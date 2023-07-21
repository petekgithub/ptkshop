import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="categories">
      {/* 1st column */}
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="shirt"
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2229712/pexels-photo-2229712.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="jacket"
          />
          <button>
            <Link className="link" to="/products/2">
              Men
            </Link>
          </button>
        </div>
      </div>
      {/* 2nd column */}
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/17404729/pexels-photo-17404729/free-photo-of-a-girl-in-a-fashionable-outfit-sitting-on-a-chair-in-an-empty-room.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="jean"
          />
          <button>
            <Link className="link" to="/products/3">
              Women
            </Link>
          </button>
        </div>
      </div>
      {/* 3rd column */}
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/1055686/pexels-photo-1055686.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="dress"
              />
              <button>
                <Link className="link" to="/products/4">
                  Women
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/2703039/pexels-photo-2703039.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="jacket"
              />
              <button>
                <Link className="link" to="/products/4">
                  Women
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {" "}
          <img
            src="https://images.pexels.com/photos/3048457/pexels-photo-3048457.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="jacket"
          />
          <button>
            <Link className="link" to="/products/4">
              Men
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
