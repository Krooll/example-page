import { Container, Col, Modal } from 'react-bootstrap';
import styles from './Help.module.scss';
import NavBar from '../../features/NavBar/NavBar';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sendEmailRequest } from '../../../redux/mailsRedux';
import shortid from 'shortid';

const Help = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if(name && email && title && message){
            dispatch(sendEmailRequest({id: shortid(), name: name, email: email, title: title, message: message}));
            navigate('/');
        }
    };
 
    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    return(
        <Container>
            <NavBar />
                <Col xs={12} md={12} lg={12} className={styles.form}>
                    <Form onSubmit={validate(handleSubmit)} className={styles.formSection}>
                        <Col xs={9} md={10} lg={8} className={styles.formTitle}>
                            <h1>Pomoc</h1>
                            <p>
                                Jeśli potrzebujesz się z Nami skontaktować, wypełnij formularz,
                                odpowiemy najszybciej jak to możliwe.
                            </p>
                        </Col>
                        <Col xs={10} md={10} lg={8}>
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
                                    {errors.title && <small className="d-block form-text text-danger mt-2">To pole jest wymagane, minimum 3 znaki.</small>}
                            </Form.Group>
                        </Col>
                        <Col xs={10} md={12} lg={12}>
                            <Form.Group >
                                <Form.Label>Opisz problem</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Napisz wiadomość..." 
                                {...register("message", { required: true, minLength: 25, maxLength: 520})}
                                value={message} 
                                onChange={e => setMessage(e.target.value)}/>
                                {errors.message && <small className="d-block form-text text-danger mt-2">To pole jest wymagane, minimum 25 znaków.</small>} 
                            </Form.Group>
                        </Col>
                        <button type='submit' className={styles.buttonForm}>Wyślij</button>
                    </Form>
                </Col>
        </Container>
    );
};

export default Help;