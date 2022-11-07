import React, { useRef } from "react";
import SectionHeading from "../../../components/SectionHeader/SectionHeading";

// import email from ;
import classes from "./ContactContent.module.css";

const ContactContent = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // email
    //   .sendForm(
    //     "mohamedID",
    //     "template_fsd3yn8",
    //     event.target,
    //     "_npEZYX_iY7pHV1zY"
    //   )
    //   .then((res: any) => {
    //     console.log(res);
    //   }).catch((err: any) =>{
    //     console.log(err)
    //   })

    const email = emailRef.current?.value;
    const name = nameRef.current?.value;
    const subject = subjectRef.current?.value;
    const message = messageRef.current?.value;

    fetch("mohamedgamalsaied1997@gmail.com");

    console.log({
      emailRef,
      nameRef,
      subjectRef,
      messageRef,
    });
  };

  return (
    <div className="section">
      <SectionHeading>
        <h2>
          <span>contact</span> me
        </h2>
      </SectionHeading>
      <form className={classes.form} onSubmit={submitHandler}>
        <input name="name" ref={nameRef} type="text" placeholder="Your Name" />
        <input
          name="email"
          ref={emailRef}
          type="email"
          placeholder="Your Email"
        />
        <input
          name="subject"
          ref={subjectRef}
          type="text"
          placeholder="Subject"
        />
        <textarea
          ref={messageRef}
          name="message"
          placeholder="Your Message"
        ></textarea>
        <button type="submit">Send Now</button>
      </form>
    </div>
  );
};

export default ContactContent;
