import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import LandingPage from '../LandingPage';
import{ BrowserRouter } from'react-router-dom';

xdescribe('Does Landing page render', () => {
  beforeEach(() => {
    render(<BrowserRouter><LandingPage /></BrowserRouter>);
  });

  it('renders a link to the page', () => {
    console.log('LANDING PAGE LINKS:', screen.getAllByRole('link'))
    expect(screen.getAllByRole('link')).toHaveLength(1);
  });
});
