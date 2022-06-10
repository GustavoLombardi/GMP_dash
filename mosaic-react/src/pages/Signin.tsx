import { Button, Checkbox, Col, Divider, Form, Input, Row } from "antd";

import { useHistory, useParams } from "react-router-dom";
import "antd/dist/antd.css";
import "./app.css";
import { useAuth } from "../context/AuthProvider/useAuth";

export const Login = () => {
  const auth = useAuth();

  const history = useHistory();

  async function onFinish(values: { nome: string; senha: string }) {
    try {
      await auth.authenticate(values.nome, values.senha);
      console.log("testess" + JSON.stringify(localStorage.getItem("u")));
      history.push("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // <div className="container">
    //   <div className="forms-container">
    //     <div className="signin-signup">
    //       <form className="sign-in-form">
    //         <h2 className="title">Login</h2>
    //         <div className="input-field">
    //           <i className="fas fa-user"></i>
    //           <input type="text" name="nome" placeholder="nome" />
    //         </div>
    //         <div className="input-field">
    //           <i className="fas fa-lock"></i>
    //           <input type="password" name="senha" placeholder="Senha" />
    //         </div>

    //         <input type="submit" value="Login" className="btn solid" />
    //       </form>
    //     </div>
    //   </div>

    //   <div className="panels-container">
    //     <div className="panel left-panel">
    //       <div className="content">
    //         <h3>New here ?</h3>
    //         <p>
    //           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
    //           ex ratione. Aliquid!
    //         </p>
    //         <button className="btn transparent" id="sign-up-btn">
    //           Sign up
    //         </button>
    //       </div>
    //       <img src="img/log.svg" className="image" alt="" />
    //     </div>
    //     <div className="panel right-panel">
    //       <div className="content">
    //         <h3>One of us ?</h3>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
    //           laboriosam ad deleniti.
    //         </p>
    //         Sign in
    //       </div>
    //       <img src="img/register.svg" className="image" alt="" />
    //     </div>
    //   </div>
    // </div>
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <Form className="sign-in-form" onFinish={onFinish}>
            <h2 className="title">LOGIN</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <Form.Item name="nome">
                <input type="nome" name="nome" placeholder="Nome" />
              </Form.Item>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <Form.Item name="senha">
                <input type="password" name="senha" placeholder="Senha" />
              </Form.Item>
            </div>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <input
                onClick={() => onFinish}
                type="submit"
                value="Login"
                className="btn solid"
              />
            </Form.Item>
          </Form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>TOP SERVICE GROUP</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};
