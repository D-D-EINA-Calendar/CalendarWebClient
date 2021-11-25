import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { httpServices } from "../../../../../../../core/backend/http/services";
import { entriesData } from "../../../../../../../features/scheduler/entries/infraestructure/data_sources/http/Entry.data";
import { fixtures } from "./fixtures";

describe("Entries", () => {
  let mock: MockAdapter;
  let service: string = httpServices.entries;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe("Post new entries", () => {
    describe("Good request", () => {
      test("should post a list of new [Entry] correctly", async () => {
        // Given
        let body = fixtures.postEntriesBody;
        mock.onPost(service, body).reply(200);
        // When
        let subjectList = await entriesData.postNewEntries(body);
        // Then
        if (subjectList.isError) {
          throw Error();
        }
        expect(subjectList.value).toBe(true);
      });
    });

    describe("Bad request", () => {
      test("should fail when trying to post new [Entry] - Network Error", async () => {
        // Given
        let body = fixtures.postEntriesBody;
        mock.onPost(service, body).networkErrorOnce();
        // When
        const res = await entriesData.postNewEntries(body);
        // Then
        if (!res.isError) {
          throw Error();
        }
        expect(res.error).toEqual(Error("Network Error"));
      });

      test("should fail when trying to post new [Entry] - timeout", async () => {
        // Given
        let body = fixtures.postEntriesBody;
        mock.onPost(service, body).timeoutOnce();
        // When
        const res = await entriesData.postNewEntries(body);
        // Then
        if (!res.isError) {
          throw Error();
        }
        expect(res.error).toEqual(Error("timeout of 0ms exceeded"));
      });

      test("should fail when is a bad response", async () => {
        // Given
        let body = fixtures.postEntriesBody;
        mock.onPost(service, body).reply(500);
        // When
        const res = await entriesData.postNewEntries(body);
        // Then
        if (!res.isError) {
          throw Error();
        }
        expect(res.error).toEqual(Error("Request failed with status code 500"));
      });

      test("should fail when is a good response but no the expected one", async () => {
        // Given
        let body = fixtures.postEntriesBody;
        mock.onPost(service, body).reply(201);
        // When
        const res = await entriesData.postNewEntries(body);
        // Then
        if (!res.isError) {
          throw Error();
        }
        expect(res.error).toEqual(Error());
      });
    });
  });
});

export {};
