import SuspenseComponent from 'components/suspense';
import React, { FC, Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';



const PublicRoute: FC<{ element: any }> = ({ element: Element }) => (
  <Suspense fallback={<SuspenseComponent />}>
    <Element />
  </Suspense>
);


const FormValidatorPage = React.lazy(() => import('app/FormValidator'));


const AppRoutes = () => {
  return (
    <Routes>

      {/* PUBLIC */}

      <Route path={'/form-validator/*'} element={<PublicRoute element={FormValidatorPage} />} />

      {/* DEFAULT */}

      <Route path="*" element={<Navigate to="/form-validator" />} />
    </Routes>
  );
};

export default AppRoutes;
