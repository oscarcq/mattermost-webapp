// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getUser, makeGetDisplayName} from 'mattermost-redux/selectors/entities/users';

import {GlobalState} from 'mattermost-redux/types/store';

import UserProfile from './user_profile';

type OwnProps = {
    userId: string;
}

function makeMapStateToProps() {
    const getDisplayName = makeGetDisplayName();

    return (state: GlobalState, ownProps: OwnProps) => {
        return {
            displayName: getDisplayName(state, ownProps.userId, true),
            user: getUser(state, ownProps.userId),
        };
    };
}

export default connect(makeMapStateToProps)(UserProfile);
