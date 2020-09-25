import { IMod, IExtensionApi, IState, IProfile, IProfileMod } from "vortex-api/lib/types/api";
import { ComponentEx, util, MainPage, FlexLayout, selectors, Icon, log } from "vortex-api";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { Panel, ListGroup, ListGroupItem, Button, Image, Checkbox, CheckboxProps } from "react-bootstrap";
import { getModName } from "vortex-ext-common";
import React, { Component } from 'react';


interface IConnectedProps {
    installed: { [modId: string]: IMod};
}

interface IPanelState {
    
}

type IProps = IConnectedProps;

class PanelHeadingView extends ComponentEx<IProps, {}> {
    // mainPage: React.Component<{}, any, any> = null;
    // header: React.Component<{}, any, any> = null;

    public render() {
        
        const { installed } = this.props;
        return (
            <MainPage>
                <MainPage.Body>
                        <Panel id="test-panel-heading">
                            <Panel.Heading>
                                
                                        This heading will cause the layout to be shifted down incorrectly so the bounds of the panel body below will extend below the app's bounds.
                            </Panel.Heading>
                            <Panel.Body>
                                <FlexLayout type="row">
                                    <ListGroup>
                                    {Object.keys(installed).map(i => installed[i]).map(m => {
                                        return (
                                            <ListGroupItem
                                                key={`${m.id}`}
                                            >
                                                <>{getModName(m)}</>
                                            </ListGroupItem>
                                        )
                                    })}
                                    </ListGroup>
                                </FlexLayout>
                            </Panel.Body>
                        </Panel>
                </MainPage.Body>
            </MainPage>
        )
    }
}

function mapStateToProps(state: IState): IConnectedProps {
    return {
        installed: state.persistent.mods[selectors.activeGameId(state)]
    }
}

export default withTranslation(['common'])(connect(mapStateToProps)(PanelHeadingView));