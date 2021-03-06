/**
 * Created by forrestlyman on 7/4/18
 */

import {DigUiNavItem} from "lib/ui"

import ViewTableIcon from "@material-ui/icons/ViewModule";
import ViewListIcon from "@material-ui/icons/ViewList";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import React from 'react';
import {withDig} from "lib/core";

const LayoutNav = (props) => {
  return (
    <div>
      <DigUiNavItem
        href="/demos/form"
        icon={<WebAssetIcon />}
        text="Form View Demo"
      />
      <DigUiNavItem
        href="/demos/sidebar-list"
        icon={<ViewListIcon />}
        text="Form View Demo"
      />
      <DigUiNavItem
        href="/demos/table"
        icon={<ViewTableIcon />}
        text="Form View Demo"
      />
    </div>
  )
}

export default withDig(LayoutNav);