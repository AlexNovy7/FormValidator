import React, { FC, PropsWithChildren, Suspense } from 'react';
import {  Routes, Route } from 'react-router-dom';

const Suspended: FC<PropsWithChildren & { element: any }> = ({ element: Element }) => {
  return (
    <Suspense fallback={<div />}>
      <Element />
    </Suspense>
  );
};


const FormPage = React.lazy(() => import('app/FormValidator/Form.page'));

const FormValidatorRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspended element={FormPage} />} />
    </Routes>
  );
};

export default FormValidatorRoutes;
