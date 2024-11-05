import ReactGA from 'react-ga';

const TRACKING_ID = 'G-RVNE5GBRWB';
ReactGA.initialize(TRACKING_ID);

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const logEvent = (category, action) => {
  ReactGA.event({
    category: category,
    action: action
  });
};
