import React from 'react';
import { deleteContact } from 'redux/contactsOperation';
import { filteredContacts } from 'redux/selector';
import { useSelector, useDispatch } from 'react-redux';
import { ContactInfo, ContactButtom } from './ContactList.styled';


 
    

export const ContactList = () => {
  const stateContacts = useSelector(filteredContacts);
  const dispatch = useDispatch();
 
  return (
    <>
      <ul>
        {stateContacts.map(({ id, name, number }) => (
          <ContactInfo key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <ContactButtom
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </ContactButtom>
          </ContactInfo>
        ))}
      </ul>
    </>
  );
};
export default ContactList;
