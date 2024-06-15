// containers/OmniFusionTokenContainer.tsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadOmniFusionTokenData } from '../store/omnifusion-token/omnifusion-token.actions';
import { OmniFusionTokenState } from '../store/omnifusion-token/omnifusion-token.state';
import { OmniFusionTokenService } from '../services/omnifusion-token.service';

const OmniFusionTokenContainer: React.FC = () => {
  const dispatch = useDispatch();
  const omniFusionTokenState = (store.getState() as { omniFusionToken: OmniFusionTokenState }).omniFusionToken;

  useEffect(() => {
    OmniFusionTokenService.init();
    dispatch(loadOmniFusionTokenData());
  }, [dispatch]);

  return null;
};

export default OmniFusionTokenContainer;
