# assignment_fideligard_spa
Buy low, sell high.

[An AngularJS JavaScript single-page web application using services, directives, ui-router, and good modular code to create a stock portfolio simulator using Yahoo's finance trading data](http://www.vikingcodeschool.com)


Flows

landing View (index)

1. Navbar  ui-view --> navbar,  ui-view navbar.html
2. Date Slider     --> dateSlider, ui-view date_slider.html
3. Stock Panel View --> stockPanel,   ui-view  --> stock_panel.html
4. Main View
    4.1 trade
    4.2 transactions
    4.3 Portfolio

In App.js use these routes and states
> /stocks
   dateSlider View
   stockPanel View

>>/stocks/trade (stocks.trade)
>>/stocks/transactions (stocks.portfolio)
>>/stocks/portfolio (stocks.portfolio)
    