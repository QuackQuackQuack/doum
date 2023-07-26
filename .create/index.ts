import figlet from 'figlet';
import chalk from 'chalk';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import inquirer from 'inquirer';
import mustache from 'mustache';

const log = console.log;
log(chalk.bold.greenBright(figlet.textSync("Doum")))

const regType = /^[A-Za-z0-9]+$/;

const defalut = {
  baseDir: './src',
  templateDir: './.create/templates/'
}

inquirer
  .prompt([
    {
      type: 'list',
      message: 'Pick the type',
      name: 'type',
      // choices: ['array', 'object', 'math', 'string', 'validation', 'etc', 'new']
      choices: [
        {
          name: 'Array',
          value: 'array',
        },
        {
          name: 'Object',
          value: 'object',
        },
        {
          name: 'Math',
          value: 'math',
        },
        {
          name: 'String',
          value: 'string',
        },
        {
          name: 'Validation',
          value: 'validation',
        },
        {
          name: 'Etc',
          value: 'etc',
        },
        {
          name: 'New',
          value: 'new'
        }
      ]
    },
    {
      type: 'input',
      name: 'newType',
      message: 'Please enter a new type.',
      when(answers) {
        return answers.type === 'new';
      },
      validate: (answer) => {
        if (!answer) {
          return 'Please enter a new type.';
        }

        if (!regType.test(answer)) {
          return 'Only English and numbers are allowed.';
        }

        return true;
      },
    },
    {
      type: 'input',
      name: 'name',
      message: 'Please enter a name',
      validate: (current, answers) => {
        const { newType, type } = answers;
        const makeType = newType ?? type;

        if (!current) {
          return 'Please enter a name';
        }

        if (!regType.test(current)) {
          return 'Only English and numbers are allowed.';
        }

        if (getIsExists(makeType, current)) {
          return 'It already exists.';
        }        
        return true;
      },
    },
    { 
      type: 'checkbox',
      name: 'files',
      message: 'Select files to create',
      choices: [
        { 
          name: 'function',
          checked: true
        },
        { 
          name: 'test',
          checked: true
        },
        { 
          name: 'stories',
          checked: true
        }
      ],
      validate: (choices: []) => {
        if (!choices.length) {
          return 'Please select at least one.';
        }
        return true;
      },
    }
    ])
  .then((answers) => {
    const { type, name, files, newType } = answers;
    const makeType = newType ?? type;
    makeFiles(makeType, name, files);
  })
  .catch((error) => {
    if (error.isTtyError) {
      log(chalk.red(`Prompt couldn't be rendered in the current environment`));
    } else {
      log(chalk.red(`Something else went wrong`));
    }
  });


  /**
 * makeFiles
 * @description inform whether or not to generate.
 * @param {string} type function type
 * @param {string} functionName functionName
 * @param {Array} files files
 * @returns {boolean} 
 */
async function makeFiles(type: string, functionName: string, files: []) {
  const dir = `${defalut.baseDir}/${type}/${functionName}/`;
  const getFileName = (fileType: string) => {
    return path.resolve(dir, `${functionName}.${fileType}`);
  }

  if(!getIsExists(type, functionName)) {
    fs.mkdirSync( dir, { recursive: true } );
    
    
    await files.map(async (item: string) => {
      switch(item) {
        case 'function':
          const functionTemplate = await makeFunctionTemplate(functionName);
          fs.writeFileSync(getFileName('ts'), functionTemplate);
          break;
        case 'test':
          const testTemplate = await makeTestTemplate(type, functionName);
          fs.writeFileSync(getFileName('test.ts'), testTemplate);
          break;
        case 'stories':
          const storiesTemplate = await makeStoriesTemplate(type, functionName);
          fs.writeFileSync(getFileName('stories.mdx'), storiesTemplate);
          break;
        default:
          break; 
      }
    });
    log(chalk.green(`Successfully created ${type} | ${functionName}.`));
  }
}


/**
 * getIsExists
 * @description inform whether or not to generate.
 * @param {string} type function type
 * @param {string} functionName functionName
 * @returns {boolean} 
 */
function getIsExists(type: string, functionName: string): boolean {
  const dir = `${defalut.baseDir}/${type}/${functionName}/`;
  return fs.existsSync(dir);
}

/**
 * getTemplateFiles
 * @description find a template file
 * @param {string} templateName 
 * @returns {Promise<string>} file url
 */
function getTemplateFiles(templateName: string): Promise<string> {
  return fsPromises.readFile(`${defalut.templateDir}${templateName}`, { encoding: 'utf-8' });
}

/**
 * makeFunctionTemplate
 * @param {string} functionName functionName
 * @returns {string} Template html
 */
async function makeFunctionTemplate(functionName: string) {
  const template = await getTemplateFiles('doum.ts.mustache');

  return mustache.render(template, { functionName })
}

/**
 * makeTestTemplate
 * @param {string} type function type
 * @param {string} functionName functionName
 * @returns {string} Template html
 */
async function makeTestTemplate(type: string, functionName: string) {
  const template = await getTemplateFiles('doum.test.ts.mustache');

  return mustache.render(template, { type, functionName })
}

/**
 * makeStoriesTemplate
 * @param {string} type function type
 * @param {string} functionName functionName
 * @returns {string} Template html
 */
async function makeStoriesTemplate(type: string, functionName: string) {
  const template = await getTemplateFiles('doum.stories.mdx.mustache');

  return mustache.render(template, { type, functionName })
}
