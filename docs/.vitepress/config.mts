import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
  title: "Spokane Go Users Group",
  description: "It's in the wiki!",

  head: [['link', { rel: 'icon', href: 'https://gitlab.com/uploads/-/system/group/avatar/97516866/IMG_3076.png?width=16' }]],
  ignoreDeadLinks: true,
  themeConfig: {
    logo: 'https://gitlab.com/uploads/-/system/group/avatar/97516866/IMG_3076.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Meetups', link: '/Meetups' },
    ],
    
    socialLinks: [
      { icon: 'gitlab', link: 'https://gitlab.com/spokane-go' }
    ],
    editLink: {
      pattern: 'https://gitlab.com/spokane-go/spokane-go-docs/-/edit/master/docs/:path'
    },
    footer: {
      copyright: 'Copyright © All the years. Whoever wrote it.',
    },
    outline: {
      level: 'deep',
    }

  },
  lastUpdated: true,
  srcExclude: ['**/old-confluence/**'],
  outDir: '../public',

};

const vitePressSidebarOptions = {
  documentRootPath: '/docs',
  collapsed: false,
  collapseDepth: 1,
  capitalizeFirst: true,
  capitalizeEachWords: true,
  hyphenToSpace: true,
  sortMenusByName: true,
  includeRootIndexFile: false,
  includeFolderIndexFile: false,
  useFolderLinkFromIndexFile: true,


  /*
     * For detailed instructions, see the links below:
     * https://vitepress-sidebar.cdget.com/guide/options
     */
    //
    // ============ [ RESOLVING PATHS ] ============
    // documentRootPath: '/',
    // scanStartPath: null,
    // resolvePath: null,
    // basePath: null,
    //
    // ============ [ GROUPING ] ============
    // collapsed: true,
    // collapseDepth: 2,
    // rootGroupText: 'Contents',
    // rootGroupLink: 'https://github.com/jooy2',
    // rootGroupCollapsed: false,
    //
    // ============ [ GETTING MENU TITLE ] ============
    // useTitleFromFileHeading: true,
    // useTitleFromFrontmatter: true,
    // useFolderLinkFromIndexFile: false,
    // useFolderTitleFromIndexFile: false,
    // frontmatterTitleFieldName: 'title',
    //
    // ============ [ GETTING MENU LINK ] ============
    // useFolderLinkFromSameNameSubFile: false,
    // useFolderLinkFromIndexFile: false,
    // folderLinkNotIncludesFileName: false,
    //
    // ============ [ INCLUDE / EXCLUDE ] ============
    // excludePattern: ['README.md', 'folder/'],
    // excludeFilesByFrontmatterFieldName: 'exclude',
    // includeDotFiles: false,
    // includeEmptyFolder: false,
    // includeRootIndexFile: false,
    // includeFolderIndexFile: false,
    //
    // ============ [ STYLING MENU TITLE ] ============
    // hyphenToSpace: true,
    // underscoreToSpace: true,
    // capitalizeFirst: false,
    // capitalizeEachWords: false,
    // keepMarkdownSyntaxFromTitle: false,
    // removePrefixAfterOrdering: false,
    // prefixSeparator: '.',
    //
    // ============ [ SORTING ] ============
    // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'],
    // sortFolderTo: null,
    // sortMenusByName: false,
    // sortMenusByFileDatePrefix: false,
    // sortMenusByFrontmatterOrder: false,
    // frontmatterOrderDefaultValue: 0,
    // sortMenusByFrontmatterDate: false,
    // sortMenusOrderByDescending: false,
    // sortMenusOrderNumericallyFromTitle: false,
    // sortMenusOrderNumericallyFromLink: false,
    //
    // ============ [ MISC ] ============
    // debugPrint: false,
};


// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));

