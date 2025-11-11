import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup"
import styles from "./Login.module.scss"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object({

  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Too short").required("Password is required"),
});

export default function LoginForm() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function handleSubmit() {
       localStorage.setItem("isAuthenticated", "true");
  navigate("/users");
    // Submission logic can be added here
  }
 function handleForgot() {
    alert("Password reset link has been sent to your email.");
  }
  
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
     handleSubmit();
      
      }}
    >
      <Form className={styles.loginForm}>
        <div>
        
<Field name="email" type="email" placeholder="Email"  className={styles.field}/>
          <ErrorMessage name="email" component="div" className={styles.error} />
        </div>

        <div>
          <div className={styles.emailField}>
          <Field name="password" type={showPassword ? "text" : "password"} placeholder="Password" className={styles.field} />
          <span onClick={()=> setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</span>
          </div>
          <ErrorMessage name="password" component="div" className={styles.error} />
        </div>

      <a className={styles.forgotBtn} onClick={handleForgot}>Forgot Password ?</a>
    
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}

