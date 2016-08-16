import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Html from '../../shared/components/Html';

module.exports = () => `<!DOCTYPE html>${renderToStaticMarkup(<Html />)}`;