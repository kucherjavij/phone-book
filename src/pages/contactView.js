import Form from "../components/form";
import ContactList from "../components/contactalist";
import Filter from "../components/filter";

export default function contactView() {
    return(
    <div>
      <Form/>
      <Filter/> 
     <ContactList/>
    </div>)
}