import css from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <li className={css.li}>
      {name}: {number}
    </li>
  );
};

export default Contact;
