import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Zynco Systems Ltd - Smart Solutions. Trusted Systems.",
  description = "Leading provider of business communication, authentication, and advisory services in Africa.",
  keywords = "business communication, authentication solutions, business advisory, USSD, SMS, QR codes, Africa technology",
  url = "https://zynco.africa"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;