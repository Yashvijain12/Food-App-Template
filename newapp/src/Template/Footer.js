import React from 'react';
import gondol from  "../images/gondol.jpg";
import workshop from "../images/workshop.jpg";
import "./Navbar.css";

function Footer(){
    return(
        <div>
            <div className="footer">
    <div className="smallContainer">
      <div className="rows">
        <div className="col-4">
          <h4>FOOTER</h4>
          <span> Sed vitae justo condimentum, porta lectus vitae</span>
        </div>
        <div className="col-4">
          <h4>BLOG POSTS</h4>
          <table>
            <tbody>
              <tr>
                <td className="B1">
                  <img src={workshop} alt=""/>
                </td>
                <td>Lorem</td>
              </tr>
              <tr>
                <td className="B1">
                  <img src={gondol} alt=""/>
                </td>
                <td>Ipsum</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-4">
          <h4>POPULAR TAGS</h4>
          <div className="tag">
            <button className="tag2">Travel</button>
            <button className="tag2">New York</button>
            <button className="tag2">dinner</button>
            <button className="tag2">Salmon</button>
            <button className="tag2">France</button>
            <button className="tag2">drink</button>
            <button className="tag2">Ideas</button>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    );
}
export default Footer;