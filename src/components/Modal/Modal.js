import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Modal.css';
import MainButtonNav from '../Button/MainButtonRow/MainButtonRow';

const modal = (props) => (
    <div styleName="modal">
        <div className="modal fade" id={props.targetName} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                <span styleName="modalOverlay">
                    <div className="modal-content">
                        <div styleName="modal-header" className="modal-header">
                        <h2 className="modal-title" id="exampleModalLongTitle">Contact</h2>

                        </div>
                        <div styleName="modal-body" className="modal-body">
                            <MainButtonNav/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    </span>

                </div>
        </div>
    </div>
)

export default CSSModules(modal, styles);