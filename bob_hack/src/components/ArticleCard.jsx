import React from "react";

function ArticleCard({ subtopic, onNext, onBack }) {
  // Sample article content based on subtopic
  const articles = {
    "Introduction to Financial Markets": {
      content:
        "Financial markets are platforms where buyers and sellers engage in the trade of financial assets such as stocks, bonds, currencies, and derivatives. These markets facilitate the raising of capital, transfer of risk, and international trade. Key components include stock markets, bond markets, forex markets, and derivatives markets. Understanding the structure and function of these markets is essential for anyone involved in finance. \n\nFinancial markets operate through various mechanisms and institutions. Stock markets, for example, are regulated by stock exchanges like the New York Stock Exchange (NYSE) and NASDAQ. These exchanges provide a platform for trading shares and ensure that the trading is transparent and fair. Bond markets allow governments and corporations to raise capital by issuing debt securities. Investors in bond markets lend money in exchange for periodic interest payments and the return of principal at maturity. \n\nForex markets facilitate the exchange of currencies, which is crucial for international trade and investment. These markets operate 24 hours a day and are the largest financial markets in the world by trading volume. Derivatives markets deal with financial contracts whose value is derived from underlying assets like stocks, bonds, commodities, or currencies. Derivatives can be used for hedging risk or for speculative purposes. \n\n[Image: Stock Exchange Floor] \n\nThe role of financial markets in the economy is significant. They provide liquidity, meaning that assets can be quickly bought or sold without significantly affecting their price. This liquidity is vital for economic stability and growth. Financial markets also enable the efficient allocation of resources by directing funds to their most productive uses. Through price discovery, financial markets reflect the collective expectations of investors about future economic conditions, which in turn influences corporate and government decision-making. \n\nMoreover, financial markets offer investment opportunities that allow individuals and institutions to build wealth. By investing in stocks, bonds, or other financial instruments, investors can earn returns that outpace inflation, thus preserving and growing their wealth over time. However, financial markets also come with risks, and understanding these risks is crucial for making informed investment decisions.",
      images: [
        "https://st.depositphotos.com/2990495/3739/i/450/depositphotos_37391853-stock-photo-stock-market-board.jpg",
      ],
    },
    "Basics of Stock Markets": {
      content:
        "Stock markets are venues where shares of publicly held companies are issued and traded. They provide companies with access to capital in exchange for giving investors a slice of ownership in the company. Key concepts include initial public offerings (IPOs), stock exchanges (such as the NYSE and NASDAQ), stock indices (like the S&P 500), and market capitalization. Investors buy and sell stocks based on their predictions of the company’s future performance. \n\nThe stock market functions through a network of exchanges where stocks are listed and traded. The primary market is where companies issue new shares through IPOs to raise capital for expansion and other business activities. Once the shares are issued, they are traded in the secondary market, where existing shares are bought and sold among investors. Stock exchanges like the NYSE and NASDAQ provide the infrastructure and regulatory framework to facilitate these transactions. \n\n[Image: Stock Market Graph] \n\nStock indices, such as the S&P 500, Dow Jones Industrial Average (DJIA), and NASDAQ Composite, track the performance of a group of stocks and serve as benchmarks for the overall market. These indices are used by investors to gauge market trends and make investment decisions. Market capitalization, the total market value of a company’s outstanding shares, is another key metric used to assess a company's size and investment potential. \n\nInvesting in the stock market involves understanding various factors that influence stock prices, including company performance, economic indicators, interest rates, and geopolitical events. Fundamental analysis and technical analysis are two common approaches used by investors. Fundamental analysis involves evaluating a company's financial statements, management, industry position, and economic conditions to determine its intrinsic value. Technical analysis, on the other hand, focuses on historical price and volume data to identify patterns and trends that may predict future price movements. \n\n[Image: Technical Analysis Chart] \n\nInvestors can choose from different types of stocks, such as common stocks, preferred stocks, and dividend-paying stocks, depending on their investment goals and risk tolerance. Diversification, or spreading investments across various sectors and asset classes, is a key strategy to manage risk. By diversifying, investors can reduce the impact of poor performance in any single investment on their overall portfolio.",
      images: [
        "https://www.amcharts.com/wp-content/uploads/2019/10/demo_14592_none-11.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ79HixLWsVA4pz9gCYfGKjP4duLiUFVaDs7Q&s",
      ],
    },
    "Introduction to Insurance": {
      content:
        "Insurance is a financial product that provides protection against financial loss. It involves the transfer of risk from an individual or entity to an insurance company in exchange for a premium. Key types of insurance include health insurance, life insurance, property insurance, and liability insurance. Understanding how insurance works helps individuals and businesses manage potential risks and financial uncertainties. \n\nHealth insurance covers medical expenses incurred due to illnesses or injuries. Policies can vary in terms of coverage, premiums, and deductibles. Life insurance provides financial support to beneficiaries upon the policyholder's death. It can be used to cover expenses such as funeral costs, debts, and living expenses for surviving dependents. \n\n[Image: Health Insurance Policy] \n\nProperty insurance protects against damage or loss of physical assets like homes, vehicles, and businesses. This type of insurance can cover natural disasters, theft, and accidents. Liability insurance offers protection against claims resulting from injuries or damages to other people or property. This is crucial for individuals and businesses to safeguard against lawsuits and significant financial losses. \n\nThe insurance industry operates on the principle of pooling risk. By collecting premiums from a large number of policyholders, insurance companies create a pool of funds that can be used to pay out claims. This pooling of risk allows insurers to offer coverage at a cost that is manageable for policyholders. Underwriters assess the risk associated with insuring an individual or entity and determine the appropriate premium based on factors such as age, health, and occupation. \n\n[Image: Insurance Documents] \n\nInsurance policies are contracts that outline the terms and conditions of coverage. It's essential for policyholders to understand their policies, including what is covered, exclusions, and the process for filing claims. The claims process involves notifying the insurer of a loss, providing necessary documentation, and receiving compensation as per the policy terms. In some cases, disputes may arise over claims, and understanding the appeals process can help policyholders resolve such issues. \n\nThe role of insurance in financial planning cannot be overstated. It provides a safety net that helps individuals and businesses recover from unexpected events. By transferring risk to an insurer, policyholders can focus on their personal and professional goals without the constant worry of potential financial setbacks.",
      images: [
        "https://www.careinsurance.com/upload_master/media/posts/February2023/health-insurance-portability-mistakes.jpg",
        "https://assets-global.website-files.com/5aa7081220a301f2a3644f3b/5f03549e3c486d0c8c046e69_insuranceblog.jpg",
      ],
    },
    "Understanding the Capital Asset Pricing Model (CAPM)": {
      content:
        "The Capital Asset Pricing Model (CAPM) is a framework used to determine the expected return on an investment and assess the risk associated with it. CAPM asserts that the expected return on a security is equal to the risk-free rate plus a risk premium, which is based on the security’s beta (a measure of its volatility relative to the market). The formula is: Expected Return = Risk-Free Rate + β × (Market Return - Risk-Free Rate). Understanding CAPM helps investors make informed decisions about the risk and return of their investment portfolios. \n\nThe risk-free rate represents the return on an investment with zero risk, typically associated with government bonds. The market return is the average return of the market, often represented by a broad index like the S&P 500. Beta (β) measures a security's sensitivity to market movements. A beta greater than 1 indicates that the security is more volatile than the market, while a beta less than 1 indicates lower volatility. \n\n[Image: CAPM Formula] \n\nCAPM is based on several assumptions, including that investors hold diversified portfolios, markets are efficient, and there are no taxes or transaction costs. While these assumptions may not hold in reality, CAPM provides a useful starting point for evaluating the relationship between risk and return. It helps investors determine the appropriate required return for a given level of risk, guiding investment decisions. \n\nDespite its widespread use, CAPM has limitations. It assumes that all investors have the same expectations and that they can borrow and lend at the risk-free rate, which may not be realistic. Additionally, CAPM relies on historical data to estimate beta, which may not accurately predict future volatility. Other models, such as the Arbitrage Pricing Theory (APT) and the Fama-French Three-Factor Model, have been developed to address some of these limitations by incorporating additional risk factors. \n\n[Image: Investment Portfolio] \n\nCAPM is widely used in corporate finance for capital budgeting and project evaluation. By comparing the expected return of a project to its required return based on CAPM, companies can make informed decisions about which projects to pursue. The model is also used in portfolio management to construct and manage investment portfolios that align with an investor's risk tolerance and return objectives. \n\nUnderstanding CAPM is essential for anyone involved in investing or financial analysis. It provides a foundation for evaluating the trade-off between risk and return and helps investors make rational decisions to achieve their financial goals.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBBGsn9kYmFP3SJCOnwp5D0htCzNNL7dG5A&s",
        "https://cdn.educba.com/academy/wp-content/uploads/2021/03/Portfolio-Investment-2.png",
      ],
    },

    "Role of Financial Intermediaries": {
      content:
        "Financial intermediaries play a crucial role in the global economy, bridging the gap between savers and borrowers. They are institutions that facilitate the flow of funds from individuals and entities with surplus funds to those with a deficit. These intermediaries include banks, insurance companies, pension funds, investment firms, and mutual funds. They provide a range of services that enhance the efficiency of financial markets, ensure liquidity, and manage risks. 1. Facilitation of Funds Transfer One of the primary functions of financial intermediaries is to facilitate the transfer of funds from savers to borrowers. Banks, for example, accept deposits from individuals and businesses, which they then use to provide loans to other customers. This process helps channel funds from those who want to save and invest their money to those who need capital for various purposes, such as buying a house, starting a business, or financing education. 2. Risk Managemen Financial intermediaries help manage risk through diversification and insurance. By pooling resources from many investors, mutual funds can diversify their investment portfolios, thereby reducing the overall risk. Insurance companies, on the other hand, provide policies that protect individuals and businesses against various risks, such as health issues, accidents, and property damage. These companies assess the risk and charge premiums accordingly, spreading the risk across many policyholders. 3. Provision of Liquidity Liquidity is essential for the functioning of the financial system, and financial intermediaries play a key role in providing it. Banks and other financial institutions offer products like savings accounts, checking accounts, and money market accounts that allow individuals and businesses to access their funds when needed. This availability of liquid assets ensures that consumers and businesses can meet their short-term obligations and financial needs. 4. Reduction of Transaction Costs Intermediaries reduce transaction costs by providing expertise and economies of scale. For instance, investment firms and mutual funds employ financial analysts and fund managers who can conduct extensive research and manage large portfolios more efficiently than individual investors. This expertise lowers the cost of trading and managing investments, making it more affordable for individuals to participate in the financial markets. 5. Information Asymmetry Reduction Financial intermediaries also help reduce information asymmetry between borrowers and lenders. They conduct due diligence, assess creditworthiness, and monitor the performance of borrowers. This process helps ensure that funds are allocated to creditworthy projects and businesses, reducing the likelihood of defaults and financial losses. 6. Economic Stability and Growth By efficiently allocating resources and managing risks, financial intermediaries contribute to economic stability and growth. They enable businesses to obtain the financing needed for expansion and innovation, which leads to job creation and economic development. Furthermore, by providing consumers with access to credit, they help drive consumption and investment, which are key components of economic growth.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwd3nBL-drZHz1mYyUh_cn0JrSwmaypMMUw&s",
        "https://www.slideteam.net/media/catalog/product/cache/1280x720/f/l/flow_of_funds_chart_powerpoint_ppt_template_bundles_slide09.jpg",
      ],
    },
  };

  // Extract the content and images from the articles JSON
  const { content, images } = articles[subtopic];

  // Split the content into paragraphs
  const paragraphs = content.split("\n\n");

  // Function to insert images randomly between paragraphs
  const renderContentWithImages = (paragraphs, images) => {
    const contentElements = [];
    let imageIndex = 0;

    paragraphs.forEach((paragraph, index) => {
      contentElements.push(<p key={index}>{paragraph}</p>);
      if (images[imageIndex] && Math.random() > 0.5) {
        contentElements.push(
          <img
            key={`image-${index}`}
            src={images[imageIndex]}
            alt="Related visual content"
            className="my-4 w-1/2 h-auto mx-auto"
          />
        );
        imageIndex++;
      }
    });

    // Append any remaining images at the end if not used
    while (imageIndex < images.length) {
      contentElements.push(
        <img
          key={`image-${paragraphs.length + imageIndex}`}
          src={images[imageIndex]}
          alt="Related visual content"
          className="my-4 w-full h-auto"
        />
      );
      imageIndex++;
    }

    return contentElements;
  };

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="flex-grow">
        <h1 className="text-3xl font-bold mb-4">{subtopic}</h1>
        <div>{renderContentWithImages(paragraphs, images)}</div>
      </div>
      <div className="mt-4 flex justify-between">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ArticleCard;
