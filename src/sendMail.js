import React from 'react';
import './sendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form';

function SendMail() {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Messages</h3>
                <CloseIcon className="sendMail__close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="to"
                    placeholder="To" 
                    type="text"
                    ref={register({ required: true })}
                />
                {errors.to && <span className="sendMail__error">To field is required</span>}
                <input
                    name="subject"
                    placeholder="Subject"
                    type="text" 
                    ref={register({ required: true })}
                />
                {errors.subject && <span className="sendMail__error">Subject field is required</span>}
                <input 
                    name="message"
                    placeholder="Message..."
                    type="text" 
                    className="sendMail__message"
                    ref={register({ required: true })}
                />
                {errors.message && <span className="sendMail__error">Message field is required</span>}
                <div className="sendMail__option">
                    <Button 
                        className="sendMail__send"
                        varient ="contained"
                        color="primary"
                        type="submit"
                    >
                        Send
                </Button>
            </div>
            </form>
        </div>
    )
}

export default SendMail;
