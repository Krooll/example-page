import { Container, Col, Modal, Button } from 'react-bootstrap';
import styles from './Help.module.scss';
import NavBar from '../../features/NavBar/NavBar';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sendEmailRequest } from '../../../redux/mailsRedux';
import shortid from 'shortid';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Help = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [info, setInfo] = useState(false);
    const dispatch = useDispatch();
    const form = useRef();

    const sendEmail = () => {
        emailjs.sendForm('service_sb0p2jl', 'template_u1vwadn', form.current, '6kRcRpGnOniZpFlCc')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    const handleSubmit = () => {
        if(name && email && title && message){
            dispatch(sendEmailRequest({id: shortid(), name: name, email: email, title: title, message: message}));
            setInfo(true);
        }
    };

    const onSubmit = () => {
        sendEmail();
        validate(handleSubmit);
    }

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    return(
        <Container>
            <NavBar />
                <Col xs={12} md={12} lg={12} className={styles.form}>
                    <Form ref={form} onSubmit={validate(handleSubmit)} className={styles.formSection}>
                        <Col xs={9} md={10} lg={8} className={styles.formTitle}>
                            <h1>Pomoc</h1>
                        </Col>
                        <Col xs={12} md={12} lg={11}>
                                <p>
                                    Jeśli potrzebujesz się z Nami skontaktować, wypełnij formularz,
                                    odpowiemy najszybciej jak to możliwe.
                                </p>
                            </Col>
                        <Col xs={11} md={10} lg={8}>
                            <Form.Group className={styles.formGroup}>
                                <Form.Label>Imię</Form.Label>
                                <Form.Control 
                                    {...register("name", { required: true, minLength: 3, maxLength: 20})}
                                    value={name}
                                    onChange={e => setName(e.target.value)} placeholder="Wpisz swoje imię..." />
                                    {errors.name && <small className="d-block form-text text-danger mt-2">To pole jest wymagane, minimum 3 znaki.</small>}
                            </Form.Group>
                            <Form.Group className={styles.formGroup}>
                                <Form.Label>Adres email</Form.Label>
                                <Form.Control  
                                    {...register("email", { required: true, minLength: 3, maxLength: 60})}
                                    value={email}
                                    onChange={e => setEmail(e.target.value)} placeholder="Wpisz swój adres email..." />
                                    {errors.email && <small className="d-block form-text text-danger mt-2">To pole jest wymagane.</small>}
                            </Form.Group>
                            <Form.Group className={styles.formGroup}>
                                <Form.Label>Tytuł</Form.Label>
                                <Form.Control 
                                    {...register("title", { required: true, minLength: 3, maxLength: 20})}
                                    value={title}
                                    onChange={e => setTitle(e.target.value)} placeholder="Wpisz tytuł wiadomości..." />
                                    {errors.title && <small className="d-block form-text text-danger mt-2">To pole jest wymagane, minimum 3 znaki, maximum 20.</small>}
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={12} lg={12}>
                            <Form.Group >
                                <Form.Label>Napisz wiadomość</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Napisz wiadomość..." 
                                {...register("message", { required: true, minLength: 25, maxLength: 520})}
                                value={message} 
                                onChange={e => setMessage(e.target.value)}/>
                                {errors.message && <small className="d-block form-text text-danger mt-2">To pole jest wymagane, minimum 25 znaków.</small>} 
                            </Form.Group>
                        </Col>
                        <div className={styles.button}>
                            <button onClick={onSubmit} className={styles.buttonForm}>Wyślij</button>
                        </div>
                    </Form>
                    <Modal show={info} className={styles.modal}>
                        <Modal.Title>Wiadomośc została wysłana!</Modal.Title>
                    </Modal>
                </Col>
        </Container>
    );
};

export default Help;