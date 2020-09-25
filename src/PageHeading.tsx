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

class PageHeadingView extends ComponentEx<IProps, {}> {
    // mainPage: React.Component<{}, any, any> = null;
    // header: React.Component<{}, any, any> = null;

    public render() {
        
        const { installed } = this.props;
        return (
            <MainPage>
                <MainPage.Header>
                    This heading will layout correctly such that the contents of the MainPage.Body will stay inside the window bounds.
                </MainPage.Header>
                <MainPage.Body>
                        <Panel id="test-page-heading">
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

export default withTranslation(['common'])(connect(mapStateToProps)(PageHeadingView));