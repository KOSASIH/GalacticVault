// containers/CryptoGatewayContainer.tsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadCryptoGatewayData } from '../store/crypto-gateway/crypto-gateway.actions';
import { CryptoGatewayState } from '../store/crypto-gateway/crypto-gateway.state';
import { CryptoGatewayService } from '../services/crypto-gateway.service';

const CryptoGatewayContainer: React.FC = () => {
  const dispatch = useDispatch();
  const cryptoGatewayState = (store.getState() as { cryptoGateway: CryptoGatewayState }).cryptoGateway;

  useEffect(() => {
    CryptoGatewayService.init();
    dispatch(loadCryptoGatewayData());
  }, [dispatch]);

  return null;
};

export default CryptoGatewayContainer;
