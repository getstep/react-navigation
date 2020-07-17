import * as React from 'react';
import { StackNavigationState, Route } from '@react-navigation/native';
import type { StackNavigationHelpers, StackNavigationConfig, StackDescriptorMap } from '../../types';
declare type Props = StackNavigationConfig & {
    state: StackNavigationState;
    navigation: StackNavigationHelpers;
    descriptors: StackDescriptorMap;
};
declare type State = {
    routes: Route<string>[];
    previousRoutes: Route<string>[];
    previousDescriptors: StackDescriptorMap;
    openingRouteKeys: string[];
    closingRouteKeys: string[];
    replacingRouteKeys: string[];
    descriptors: StackDescriptorMap;
};
export default class StackView extends React.Component<Props, State> {
    static getDerivedStateFromProps(props: Readonly<Props>, state: Readonly<State>): {
        routes: Route<string>[];
        previousRoutes: Route<string>[];
        descriptors: StackDescriptorMap;
        previousDescriptors: StackDescriptorMap;
        openingRouteKeys?: undefined;
        closingRouteKeys?: undefined;
        replacingRouteKeys?: undefined;
    } | {
        routes: (Route<string> & {
            state?: import("@react-navigation/native").NavigationState | import("@react-navigation/native").PartialState<import("@react-navigation/native").NavigationState> | undefined;
        })[];
        previousRoutes: (Route<string> & {
            state?: import("@react-navigation/native").NavigationState | import("@react-navigation/native").PartialState<import("@react-navigation/native").NavigationState> | undefined;
        })[];
        previousDescriptors: StackDescriptorMap;
        openingRouteKeys: string[];
        closingRouteKeys: string[];
        replacingRouteKeys: string[];
        descriptors: StackDescriptorMap;
    };
    state: State;
    private getGesturesEnabled;
    private getPreviousRoute;
    private renderScene;
    private renderHeader;
    private handleOpenRoute;
    private handleCloseRoute;
    private handleTransitionStart;
    private handleTransitionEnd;
    private handleGestureStart;
    private handleGestureEnd;
    private handleGestureCancel;
    render(): JSX.Element;
}
export {};
