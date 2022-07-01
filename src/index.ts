import {Client} from 'typesense';
import {CollectionCreateSchema} from 'typesense/lib/Typesense/Collections';
import {ImportResponse} from 'typesense/lib/Typesense/Documents';
import {CollectionUpdateSchema} from 'typesense/lib/Typesense/Collection';

const run = async () => {

    const client = new Client({
        nodes: [{
            host: 'localhost',
            port: 8108,
            protocol: "http",
        }],
        apiKey: 'xyz',
        numRetries: 3, 
        connectionTimeoutSeconds: 120, 
        logLevel: "error",
    });

    const collection = 'contacts';

    const schema: CollectionCreateSchema = {
        name: collection,
        fields: [
        {
            facet: false,
            index: true,
            name: 'name',
            optional: false,
            type: 'string'
        },
        {
            facet: false,
            index: true,
            name: 'gender',
            optional: true,
            type: 'string'
        },
        ],
    };

    try {
        await client.collections(collection).delete()
    } catch (error) {
        // do nothing
    }

    // create a collection
    await client.collections().create(schema);

    const documents = [{
        id: 'test1',
        name: 'Test User1',
        gender: 'Female',
    },{
        id: 'test2',
        name: 'Test User2',
        gender: 'Male',
    }];

    const response: ImportResponse[] = await client
        .collections(collection)
        .documents()
        .import(documents);
    console.log('IMPORTED', response)
    // Process results as needed for errors / success
    let failedItems = response.filter(({ success }: { success: boolean }) => success === false)
    console.log('FAILED', failedItems)

    // Now try to update schema
    const update_schema:CollectionUpdateSchema = {
        fields: [
            {
                name: 'gender', 
                type: 'string', 
                drop: true 
            },
            {
                facet: true,
                index: true,
                name: 'gender',
                optional: true,
                type: 'string'
            },
          ]
    }

    let results = await client.collections(collection).update(update_schema);
    console.log(results)

    results = await client.collections(collection).retrieve();
    console.log(results)
}   

run().catch(console.log).finally(() => process.exit(0));