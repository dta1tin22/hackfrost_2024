import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		ignores: [
			'.DS_Store',
			'**/node_modules/',
			'**/target/',
			'**/build/',
			'**/dist/',
			'**/.svelte-kit/',
			'**/package',
			'.env',
			'.env.*',
			'!.env.example',
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock'
		]
	},
	{
		rules: {
			'constructor-super': 'off', // ts(2335) & ts(2377)
			'getter-return': 'off', // ts(2378)
			'no-const-assign': 'off', // ts(2588)
			'no-dupe-args': 'off', // ts(2300)
			'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
			'no-dupe-keys': 'off', // ts(1117)
			'no-func-assign': 'off', // ts(2630)
			'no-import-assign': 'off', // ts(2632) & ts(2540)
			'no-new-native-nonconstructor': 'off', // ts(7009)
			'no-obj-calls': 'off', // ts(2349)
			'no-redeclare': 'off', // ts(2451)
			'no-setter-return': 'off', // ts(2408)
			'no-this-before-super': 'off', // ts(2376) & ts(17009)
			'no-undef': 'off', // ts(2304) & ts(2552)
			'no-unreachable': 'off', // ts(7027)
			'no-unsafe-negation': 'off', // ts(2365) & ts(2322) & ts(2358)
			'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
			'prefer-const': 'off',
			'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
			'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-expressions': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true
				}
			]
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	}
];
