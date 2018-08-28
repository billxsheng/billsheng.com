import React from 'react';

import classes from './Modal.css';

const modal = (props) => (
    <div className={classes.modal}>
        <div className="modal fade" id={props.targetName} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                <span className={classes.modalOverlay}>
                    <div className="modal-content">

                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                    </span>

                </div>
        </div>
    </div>
)

export default modal;