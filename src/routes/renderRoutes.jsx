import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const RenderRoutes = (routes) => {
    return routes.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            element={route.element}
        >
            {route.routes && RenderRoutes(route.routes)}
        </Route>
    ));
};