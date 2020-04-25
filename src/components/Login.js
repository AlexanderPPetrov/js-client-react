/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LoginForm from './LoginForm';

const Register = (props) => {
  const {
    buttonLabel,
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="d-flex align-items-center ml-2">
      <Button outline color="light" onClick={toggle} className="btn-sm">{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
            <LoginForm/>
        </ModalBody>
        <ModalFooter>
          Ако сте забравили паролата си няма как да си я възстановите :)
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Register;