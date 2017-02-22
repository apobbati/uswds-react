import React from "react";

/**
 * Provides a standard Navigation Bar.
 *
 * Children of the Navigation Bar can be one of the following:
 *
 *   - MenuItem
 *   - Link
 *   - SearchField
 *
 * For more information on when to use each of the different sizes, please 
 * consult the US Web Design Standards (https://standards.usa.gov/search-bar/).
 */
export default class NavigationBar extends React.Component
{
  constructor(props)
  {
    super(props);
  }
  
  render()
  {
    return (
      <nav role="navigation" className="usa-nav">
        <div className="usa-nav-inner">
          <button className="usa-nav-close">
            <img src="/assets/images/close.svg" alt="close" />
          </button>
          {this.props.children}
        </div>
      </nav>
    )
  }
}

NavigationBar.LAYOUT_BASIC    = "usa-search-big";
NavigationBar.LAYOUT_EXTENDED = "usa-search-medium";

NavigationBar.propTypes = {
  layout: React.PropTypes.oneOf([ 
    NavigationBar.LAYOUT_BASIC, 
    NavigationBar.LAYOUT_EXTENDED ])
}

NavigationBar.defaultProps = {
  layout: NavigationBar.LAYOUT_BASIC
}