import {useState} from "react";
import config from "../../config";
import Stripe from "./Stripe";
import Questions from "./Questions";

function Form() { 
  const [form, set_form] = useState(config.questions);
  const complete = form.every(({complete})=>complete);

  if (!complete) {
    return <Questions form={form} setForm={set_form}/>;
  }
  return <Stripe form={form}/>;
  
}

export default Form;
