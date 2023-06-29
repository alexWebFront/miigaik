const paths = require('./paths')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Where webpack looks to start building the bundle
  // Откуда начинается сборка
  entry: [paths.src + '/index.js'],

  // Where webpack outputs the assets and bundles
  // Куда помещаются файлы сборки
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: './'
  },

  // Customize the webpack build process
  // Настройки
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    // Удаление/очистка директории для файлов сборки и неиспользуемых ресурсов при повтроном сборке
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    // Копирование статических файлов
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store']
          }
        }
      ]
    }),

    // Generates an HTML file from a template
    // Создание HTML-файла на основе шаблона
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      // template file
      // шаблон
      template: paths.src + '/template.html',
      filename: 'index.html' // output file
    }),

    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/restorePassword.html',
      filename: 'restorePassword.html' // output file
    }),

    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/setNewPassword.html',
      filename: 'setNewPassword.html' // output file
    }),

    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/moderator/moderatorMain.html',
      filename: 'moderatorMain.html' // output file
    }),

    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/moderator/accelerators.html',
      filename: 'accelerators.html' // output file
    }),

    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/moderator/acceleratorsCreate.html',
      filename: 'acceleratorsCreate.html' // output file
    }),

    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/moderator/acceleratorsItem.html',
      filename: 'acceleratorsItem.html' // output file
    }),

    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/registration.html',
      filename: 'registration.html' // output file
    }),

    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/moderator/acceleratorsCaseName.html',
      filename: 'acceleratorsCaseName.html' // output file
    }),

    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/moderator/requestCase.html',
      filename: 'requestCase.html' // output file
    }),

    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/moderator/requestTeam.html',
      filename: 'requestTeam.html' // output file
    }),

    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/moderator/caseSuccess.html',
      filename: 'caseSuccess.html' // output file
    }),

    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/moderator/bankProjects.html',
      filename: 'bankProjects.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/moderator/personalData.html',
      filename: 'personalData.html' // output file
    }),

    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/expert/expertMain.html',
      filename: 'expertMain.html' // output file
    }),

    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/expert/expertAccelerators.html',
      filename: 'expertAccelerators.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/expert/expertAcceleratorsItem.html',
      filename: 'expertAcceleratorsItem.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/expert/expertAcceleratorsCaseName.html',
      filename: 'expertAcceleratorsCaseName.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/expert/expertBankProjects.html',
      filename: 'expertBankProjects.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/expert/expertPersonalData.html',
      filename: 'expertPersonalData.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/administrator/administratorMain.html',
      filename: 'administratorMain.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/administrator/newsItem.html',
      filename: 'newsItem.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/administrator/moduleManagement.html',
      filename: 'moduleManagement.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/administrator/createNewsItem.html',
      filename: 'createNewsItem.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/administrator/accessRights.html',
      filename: 'accessRights.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/administrator/roles.html',
      filename: 'roles.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/administrator/administratorAccelerators.html',
      filename: 'administratorAccelerators.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/administrator/administratorCaseSuccess.html',
      filename: 'administratorCaseSuccess.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/administrator/administratorBankProjects.html',
      filename: 'administratorBankProjects.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/administrator/createRoles.html',
      filename: 'createRoles.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/student/studentBankProjects.html',
      filename: 'studentBankProjects.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/student/myCase.html',
      filename: 'myCase.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/student/studentMain.html',
      filename: 'studentMain.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/student/studentAccelerators.html',
      filename: 'studentAccelerators.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/student/studentAcceleratorsItem.html',
      filename: 'studentAcceleratorsItem.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/student/studentFavorite.html',
      filename: 'studentFavorite.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/student/studentCaseRequest.html',
      filename: 'studentCaseRequest.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/student/studentTeamRequest.html',
      filename: 'studentTeamRequest.html' // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/student/studentAcceleratorsCaseName.html',
      filename: 'studentAcceleratorsCaseName.html' // output file
    }),
  ],

  // Determine how modules within the project are treated
  // Настройка модулей
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      // JavaScript: использовать Babel для транспиляции
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },

      // Styles: Inject CSS into the head with source maps
      // Стили: встроить CSS в head с картами источников
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1 }
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },

      // Images: Copy image files to build folder
      // Изображения: копировать файлы в директорию для файлов сборки
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      // Шрифты и SVG
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' }
    ]
  }
}
