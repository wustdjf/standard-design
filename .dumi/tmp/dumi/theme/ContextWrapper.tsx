// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React, { useState, useEffect, useRef } from 'react';
import { useOutlet, history } from 'dumi';
import { SiteContext } from '/Users/james/learn/standard-design/node_modules/.pnpm/registry.npmmirror.com+dumi@2.1.9_@babel+core@7.21.0_@types+node@18.19.31_@types+react@18.0.2_h3id2hfbz4fdciw4ly6lqi2qeq/node_modules/dumi/dist/client/theme-api/context.js';
import { demos, components } from '../meta';
import { locales } from '../locales/config';
import * as entryMemberExports from '/Users/james/learn/standard-design/packages/standard-design/src/index.ts';

const entryExports = {
  
  ...entryMemberExports,
};

export default function DumiContextWrapper() {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(true);
  const prev = useRef(history.location.pathname);

  useEffect(() => {
    return history.listen((next) => {
      if (next.location.pathname !== prev.current) {
        prev.current = next.location.pathname;

        // mark loading when route change, page component will set false when loaded
        setLoading(true);

        // scroll to top when route changed
        document.documentElement.scrollTo(0, 0);
      }
    });
  }, []);

  return (
    <SiteContext.Provider value={{
      pkg: {"name":"standard-design","description":"https://github.com/wustdjf/standard-design","version":"1.0.0","license":"ISC","author":""},
      entryExports,
      demos,
      components,
      locales,
      loading,
      setLoading,
      themeConfig: {"title":"Standard Design","footer":"Copyright © 2000-2024 Standard Design. All Rights Reserved. Standard Design 版权所有. 沪ICP备2024018069号","prefersColor":{"default":"light","switch":true},"name":"Standard Design","carrier":"dumi","hd":true,"rtl":true,"sidebar":{"/components":[{"title":"组件","children":[{"title":"alert","link":"/components/alert"}]},{"title":"工具库","children":[{"title":"i18n","link":"/components/i18n"}]}]},"nav":[{"title":"指南","link":"/guide"},{"title":"组件","link":"/components/alert"}]},
    }}>
      {outlet}
    </SiteContext.Provider>
  );
}