import React from 'react';
import './sendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core'

function SendMail() {
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Messages</h3>
                <CloseIcon className="sendMail__close" />
            </div>

            <form>
                <input placeholder="To" type="text" />
                <input placeholder="Subject" type="text" />
                <input placeholder="Message..." type="text" className="sendMail__message" />
            </form>
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
        </div>
    )
}

export default SendMail;
